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
    Voice.start("en-US");
  };

  useEffect(() => {
    if (hasPermission) {
      Voice.onSpeechStart = () => {
        console.log("Speech recognition started");
        setRecognizedText("");
      };
      Voice.onSpeechEnd = () => {
        console.log("Speech recognition ended");
      };
      Voice.onSpeechResults = (results) => {
        setRecognizedText(results.value[0]);
      };
      return () => {
        Voice.onSpeechStart = null;
        Voice.onSpeechEnd = null;
        Voice.onSpeechResults = null;
      };
    }
  }, [hasPermission]);

  return (
    <View>
      <Button title="Start Recording" onPress={onStartRecording} />
      <Text>{recognizedText}</Text>
    </View>
  );
};

export default VoiceTest;
