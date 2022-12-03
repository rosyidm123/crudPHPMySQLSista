import React, { Component } from 'react'; 
import { View, Text, TextInput, Button }  from 'react-native'
import { style } from './Style'

class Depan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nama:'',
            alamat:'',
            listData:[],
            idEdit:null,

        };
        this.url = "http://192.168.55.159/api/api.php";
    }

    async klikEdit(id) { 
        await fetch(this.url+"/?op=detail&id="+id)
        .then((response)=>response.json())
        .then((json)=>{
            this.setState({nama:json.data.result[0].nama});
            this.setState({alamat:json.data.result[0].alamat})
            this.setState({idEdit:id})
        })
    }

    componentDidMount(){
        this.ambilListData()
    }
    async ambilListData(){
        await fetch(this.url)
        .then((Response)=>Response.json())
        .then((json)=>{
            console.log('Hasil yang didapat: '+JSON.stringify(json.data.result));
            this.setState({listData:json.data.result});
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    klikSimpan(){
        if(this.state.nama ==''|| this.state.alamat ==
        ''){
            alert('silakan masukan nama dan alamat');
        }else{
            if(this.state.idEdit){
                var urlaksi = this.url+"/?op=update&id="
                +this.state.idEdit;
            }else{
                var urlaksi = this.url+"/?op=create";
            }}
            fetch(urlaksi,{
                method:'post',
                headers:{
                    'content-type':'application/x-www-form-urlencoded'
                },
                body:"nama="+this.state.nama+"&alamat="
                +this.state.alamat
            })
            .then((response)=>response.json())
            .then((json)=>{
                this.setState({nama:''});
                this.setState({alamat:''});
                this.ambilListData();
            })

        }

        async klikDelete(id){
            await fetch(this.url+"/?op=delete&id="+id)
            .then((response)=> response.json())
            .then((json)=>{
                alert('Data Berhasil Di Hapus');
                this.ambilListData();
            })
            .catch((error)=>{
                console.log(error)
            })
        }

        render() {
            return (
                <View style={style.ViewWrapper}>
                    <View style={style.ViewData}>
                    {
                        this.state.listData.map((val,index)=>(
                            <View style={style.viewList}key=
                            {index}>
                            <Text style={style.textListNama}
                            >{val.nama}</Text>
                            <Text style={style.textListEdit} onPress={()=>this.
                                 klikEdit(val.id)}>Edit</Text>
                            <Text style={style.textListDelete} onPress={()=>this.
                                klikDelete(val.id)}>Delete</Text>
                            </View>
                        ))
                    }
                    </View>
                    <View style={style.Viewform}>
                        <TextInput
                         style={style.TextInput}
                        placeholder="Masukan Nama"
                        value={this.state.nama}
                        onChangeText={(text)=>this.setState(
                        {nama:text})}
                        >
                        </TextInput>
                        <TextInput
                        Style={style.TextInput}
                        placeholder="Masukan alamat"
                        value={this.state.alamat}
                        onChangeText={(text)=>this.setState(
                        {alamat:text})}
                        ></TextInput>
                        <Button 
                        title="Masukan Data"
                        onPress={()=>this.klikSimpan()}>
                        </Button>
                    </View>
                </View>
            );
        }
    }
    
export default Depan;