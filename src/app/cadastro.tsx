import { Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useRouter } from "expo-router";

const COR_HEX: Record<string, string> = {
    azul: "#3B82F6",
    roxa: "#8730ce",
    dourado: "#D97706",
};

function getCorPorAnos(anos: string): string {
    const n = parseInt(anos, 10);
    if (isNaN(n) || n <= 2) return "azul";
    if (n <= 4) return "roxa";
    return "dourado";
}

export default function cadastroScreen() {
    const router = useRouter();
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [anos, setAnos] = useState("");
    const [tecnologia, setTecnologia] = useState("");

    const cor = getCorPorAnos(anos);

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <Text style={styles.title}>Cadastro</Text>
                <Text style={styles.subtitle}>Preencha seus dados de dev</Text>

                <Text style={styles.label}>Nome completo</Text>
                <TextInput
                    style={styles.input}
                    value={nome}
                    onChangeText={setNome}
                    placeholder="João Silva"
                    placeholderTextColor="#bbb"
                />

                <Text style={styles.label}>Cargo</Text>
                <TextInput
                    style={styles.input}
                    value={cargo}
                    onChangeText={setCargo}
                    placeholder="Desenvolvedor Mobile"
                    placeholderTextColor="#bbb"
                />

                <Text style={styles.label}>Empresa (opcional)</Text>
                <TextInput
                    style={styles.input}
                    value={empresa}
                    onChangeText={setEmpresa}
                    placeholder="Tech Solutions"
                    placeholderTextColor="#bbb"
                />

                <Text style={styles.label}>Anos de experiência</Text>
                <TextInput
                    style={styles.input}
                    value={anos}
                    onChangeText={setAnos}
                    placeholder="4"
                    placeholderTextColor="#bbb"
                    keyboardType="numeric"
                    maxLength={2}
                />

                <Text style={styles.label}>Tecnologia favorita</Text>
                <TextInput
                    style={styles.input}
                    value={tecnologia}
                    onChangeText={setTecnologia}
                    placeholder="React Native"
                    placeholderTextColor="#bbb"
                />

                <Text style={styles.label}>Cor do cartão</Text>
                <View style={styles.corPreview}>
                    <View style={[styles.corDot, { backgroundColor: COR_HEX[cor] }]} />
                    <Text style={styles.corTexto}>
                        {cor === "azul" ? "Azul — até 2 anos" : cor === "roxa" ? "Roxa — 3 a 4 anos" : "Dourada — 5 anos ou mais"}
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => router.push({ pathname: "/preview", params: { nome, cargo, empresa, anos, tecnologia, cor } })}
                >
                    <Text style={styles.buttonText}>Gerar Cartão</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scroll: {
        padding: 24,
        paddingBottom: 40,
    },
    title: {
        color: "#8730ce",
        fontWeight: "bold",
        fontSize: 32,
        marginBottom: 4,
    },
    subtitle: {
        color: "#8730ce",
        fontWeight: "400",
        fontSize: 15,
        marginBottom: 24,
    },
    label: {
        color: "#444",
        fontWeight: "600",
        fontSize: 13,
        marginBottom: 6,
        marginTop: 14,
    },
    input: {
        borderWidth: 1.5,
        borderColor: "#ddd",
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: 15,
        color: "#111",
        backgroundColor: "#fafafa",
    },
    corPreview: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: "#ddd",
        backgroundColor: "#fafafa",
        marginTop: 6,
    },
    corDot: {
        width: 14,
        height: 14,
        borderRadius: 7,
    },
    corTexto: {
        fontSize: 14,
        color: "#555",
        fontWeight: "500",
    },
    buttonContainer: {
        backgroundColor: "#8730ce",
        borderRadius: 12,
        marginTop: 32,
        paddingVertical: 16,
    },
    buttonText: {
        color: "#ffffff",
        fontWeight: "800",
        fontSize: 15,
        textAlign: "center",
    },
});
