import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import axios from "axios";
import * as FileSystem from "expo-file-system";

const MicrophoneComponent = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState(null);
  const [sound, setSound] = useState(null);

  const handleMicrophonePressIn = async () => {
    try {
      const { status } = await Audio.requestPermissionsAsync(); // Solicitar permissão para gravação de áudio
      if (status !== "granted") {
        console.log("Permissão para gravação de áudio não foi concedida");
        return;
      }
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );

      setRecording(recording);
      setIsRecording(true);
      await recording.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      await recording.startAsync();
    } catch (error) {
      console.log("Erro ao iniciar a gravação:", error);
    }
  };

  const handleMicrophonePressOut = async () => {
    if (!recording) return;
    try {
      setIsRecording(false);
      await recording.stopAndUnloadAsync();
      const { sound: soundObject, status } =
        await recording.createNewLoadedSoundAsync();
      setSound(soundObject);
      if (status === "ERROR") {
        console.log("Erro ao gravar o som:", status);
        return;
      }
      await soundObject.playAsync();
      const uri = recording.getURI();

      const base64Audio = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      sendToApi(base64Audio);
    } catch (error) {
      console.log("Erro ao parar a gravação:", error);
    }
  };

  const sendToApi = async (base64Audio) => {
    // Converter o som para um formato aceitável pelo backend (por exemplo, WAV)
    const form = {
      audio_file: base64Audio,
    };
    // Enviar o áudio para o endpoint usando o Axios
    const response = await axios.post(
      "http://localhost:8000/cadastrar_gasto/",
      form
    );

    console.log("Resposta do servidor:", response.data);
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); // Descarregar o som quando o componente for desmontado
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPressIn={handleMicrophonePressIn}
        onPressOut={handleMicrophonePressOut}
        style={styles.microphoneButton}
      >
        <Ionicons name="mic" size={120} color={isRecording ? "red" : "blue"} />
      </TouchableOpacity>
      <Text style={styles.label}>
        {isRecording
          ? "Gravando... Solte o botão para reproduzir"
          : "Fale para a Ia suas despesas Ex: Farmacia 10 reais, sorvete 7 reais."}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  microphoneButton: {
    alignItems: "center",
  },
  label: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center",
    fontStyle: "italic",
  },
});

export default MicrophoneComponent;
