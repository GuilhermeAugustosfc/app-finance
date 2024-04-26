import React, { useState, useEffect } from "react";
import { PermissionsAndroid, View, Text, Button } from "react-native";
import Voice from "@react-native-voice/voice";

const VoiceTest = () => {
  const [recognizedText, setRecognizedText] = useState("");
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    const requestPermission = async () => {
      const status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: "Permissão para Gravar Áudio",
          message: "Este aplicativo precisa da permissão para gravar áudio.",
          buttonPositive: "OK",
        }
      );
      setHasPermission(status === "granted");
    };
    requestPermission();
  }, []);

  const onStartRecording = async () => {
    if (!hasPermission) {
      return;
    }

    try {
      Voice.start("en-US");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Button title="Start Recording" onPress={onStartRecording} />
      <Text>{recognizedText}</Text>
    </View>
  );
};

export default VoiceTest;
