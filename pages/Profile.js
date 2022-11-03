import { React, useState } from "react";
import { Text, SafeAreaView, ImageBackground, Switch, TouchableOpacity, Image } from "react-native";
import { gStyle } from "../Styles";

export default function Sett({navigation}){

    const loadset = () => {
        navigation.navigate('Settings')
    }
    const loadprof = () => {
        navigation.navigate('Profile')
    }
    const loadmain = () => {
        navigation.navigate('Main')
    }
    
const list = require("../images/listscreen.png")
const imagebar = require('../images/Rectangle3.png')
const image = require('../images/bgset.png')
const prof = require("../images/profile.png")
const home = require('../images/krug.png')
const setbut = require('../images/settingsbut.png')
const perspok = require('../images/Group204.png')
const din = require('../images/Group205.png')
const rec = require('../images/Group208.png')
const recc = require('../images/Рекомендации.png')

return(
<SafeAreaView style={gStyle.container}>
<ImageBackground source={image} resizeMode="cover" style={gStyle.image}>

    <Text style = {gStyle.proftitle}>Профиль</Text>
    <Image source={setbut} style = {{left:320, top: 25}}/>

    <Text style = {gStyle.username}>Имя пользователя</Text>

    <Image source={perspok} style = {{top:150, width: 335, height: 199, left: 25}}/>

    <Image source={din} style = {{top:170, width: 335, height: 145, left: 25}}/>

    <Image source={recc} style = {{top:247, width: 150, height: 27, left: 25}}/>
    <Image source={rec} style = {{top:240, width: 335, height: 145, left: 25}}/>

    <Image style={gStyle.bar} source={imagebar}/>

    <TouchableOpacity onPress={loadset} activeOpacity = {0.02} style = {gStyle.listtouch}>
        <Image source={list} style = {gStyle.listpos}/>
    </TouchableOpacity>

    <TouchableOpacity onPress={loadprof} activeOpacity = {0.02} style = {{position: "absolute",width: 41,height: 29,left: 325,bottom: 10}}>
    <Image source={prof} style = {gStyle.profpos} />
    </TouchableOpacity>

    <TouchableOpacity onPress={loadmain} style = {{position:"absolute", left: 159, top: 720}}>
        <Image source={home} />
    </TouchableOpacity>

</ImageBackground>
</SafeAreaView>
)
}
