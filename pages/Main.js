import React from "react";
import { Text, SafeAreaView, ImageBackground, Image, View, TouchableOpacity } from "react-native";
import { gStyle } from "../Styles";

export default function Main({ navigation }){

    const loadset = () => {
        navigation.navigate('Settings')
    }
    const loadprof = () => {
        navigation.navigate('Profile')
    }
    const loadmain = () => {
        navigation.navigate('Main')
    }
    const image = require('../images/image104.png')
    const imagebar = require('../images/Rectangle3.png')
    const list = require("../images/listscreen.png")
    const prof = require("../images/profile.png")
    const practic = require("../images/practbut.png")
    const dialog = require("../images/dialog.png")
    const music = require("../images/music.png")
    const home = require("../images/krug.png")
    return(
    <SafeAreaView style={gStyle.container}>

        <ImageBackground source={image} resizeMode="cover" style={gStyle.image}>

            <TouchableOpacity style = {{position:"absolute", left: 70, top: 266}}>
                <Image source={practic} />
            </TouchableOpacity>
            <TouchableOpacity style = {{position:"absolute", left: 70, top: 372}}>
                <Image source={dialog} />
            </TouchableOpacity>
            <TouchableOpacity style = {{position:"absolute", left: 70, top: 478}}>
                <Image source={music} />
            </TouchableOpacity>

            <Text style = {gStyle.hellotex}>Добрый день, USERNAME</Text>
            <View style={gStyle.viewst3} />
            <Image style={gStyle.bar} source={imagebar}/>

            <TouchableOpacity onPress={loadmain} style = {{position:"absolute", left: 159, top: 720}}>
                <Image source={home} />
            </TouchableOpacity>

            <TouchableOpacity onPress={loadset} activeOpacity = {0.02} style = {gStyle.listtouch}>
            <Image source={list} style = {gStyle.listpos}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={loadprof} activeOpacity = {0.02} style = {gStyle.proftouch}>
            <Image source={prof} style = {gStyle.profpos} />
            </TouchableOpacity>

        </ImageBackground>

        

    </SafeAreaView>
    )
}
