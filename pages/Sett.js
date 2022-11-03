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
    
const list = require("../images/listscreen.png");
const imagebar = require('../images/Rectangle3.png');
const image = require('../images/bgset.png');
const prof = require("../images/profile.png");
const arrow = require('../images/iconarrowleft.png');
const home = require('../images/krug.png')

const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

const [isEnabled4, setIsEnabled4] = useState(false);
  const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);

return(
<SafeAreaView style={gStyle.container}>
<ImageBackground source={image} resizeMode="cover" style={gStyle.image}>
    <Text style = {gStyle.settitle}>Настройки</Text>
    <Text style = {gStyle.setready}>Готово</Text>
    <Text style = {gStyle.notif}>Уведомления</Text>
    <Text style = {gStyle.something}>Что-то</Text>
    <Text style = {gStyle.something2}>Что-то</Text>
    <Text style = {gStyle.something3}>Что-то</Text>
    <Text style = {gStyle.something4}>Что-то</Text>
   
    <Switch
        trackColor={{ false: "#e6e6fa", true: "#e6e6fa" }}
        thumbColor={isEnabled ? "#d8bfd8" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
        style = {{top: 185, left: -19}}
      />
      <Switch
        trackColor={{ false: "#e6e6fa", true: "#e6e6fa" }}
        thumbColor={isEnabled1 ? "#d8bfd8" : "#f4f3f4"}
        onValueChange={toggleSwitch1}
        value={isEnabled1}
        style = {{top: 208, left: -19}}
      />
      <TouchableOpacity style = {{position:"absolute"}}>
        <Image source = {arrow} style = {{top: 290, left: 320}}/>
      </TouchableOpacity>
      <Switch
        trackColor={{ false: "#e6e6fa", true: "#e6e6fa" }}
        thumbColor={isEnabled2 ? "#d8bfd8" : "#f4f3f4"}
        onValueChange={toggleSwitch2}
        value={isEnabled2}
        style = {{top: 295, left: -19}}
      />

      <Text style = {gStyle.somethingelse}>Что-то еще</Text>

    <Text style = {gStyle.something0}>Что-то</Text>
    <Text style = {gStyle.something01}>Что-то</Text>
    <Text style = {gStyle.something02}>Что-то</Text>
    <Text style = {gStyle.something03}>Что-то</Text>

    <Switch
        trackColor={{ false: "#e6e6fa", true: "#e6e6fa" }}
        thumbColor={isEnabled3 ? "#d8bfd8" : "#f4f3f4"}
        onValueChange={toggleSwitch3}
        value={isEnabled3}
        style = {{top: 405, left: -19}}
      />
    <TouchableOpacity style = {{position:"absolute"}}>
        <Image source = {arrow} style = {{top: 590, left: 320}}/>
    </TouchableOpacity>  
    <TouchableOpacity style = {{position:"absolute"}}>
        <Image source = {arrow} style = {{top: 535, left: 320}}/>
    </TouchableOpacity>  
    <Switch
        trackColor={{ false: "#e6e6fa", true: "#e6e6fa" }}
        thumbColor={isEnabled4 ? "#d8bfd8" : "#f4f3f4"}
        onValueChange={toggleSwitch4}
        value={isEnabled4}
        style = {{top: 535, left: -19}}
      />

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
