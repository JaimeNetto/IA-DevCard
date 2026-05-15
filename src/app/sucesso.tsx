import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function sucessoScreen() {
    const router = useRouter();

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <View style={styles.outerRing}>
                        <View style={styles.innerRing}>
                            <View style={styles.checkCircle}>
                                <Text style={styles.checkText}>✓</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <Text style={styles.title}>Cartão criado{"\n"}com sucesso!</Text>
                <Text style={styles.subtitle}>
                    Seu cartão de visita digital está pronto.{"\n"}Compartilhe com a galera!
                </Text>
            </View>

            <View style={styles.botoesContainer}>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => router.push("/cadastro")}
                >
                    <Text style={styles.buttonText}>Criar outro cartão</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push("/")}>
                    <Text style={styles.linkText}>Voltar ao início</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "85%",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 32,
    },
    iconContainer: {
        marginBottom: 32,
    },
    outerRing: {
        width: 140,
        height: 140,
        borderRadius: 70,
        backgroundColor: "#dcfce7",
        alignItems: "center",
        justifyContent: "center",
    },
    innerRing: {
        width: 108,
        height: 108,
        borderRadius: 54,
        backgroundColor: "#bbf7d0",
        alignItems: "center",
        justifyContent: "center",
    },
    checkCircle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "#22C55E",
        alignItems: "center",
        justifyContent: "center",
    },
    checkText: {
        fontSize: 36,
        color: "#fff",
        fontWeight: "700",
    },
    title: {
        color: "#111",
        fontWeight: "bold",
        fontSize: 28,
        textAlign: "center",
        lineHeight: 36,
        marginBottom: 12,
    },
    subtitle: {
        color: "#888",
        fontWeight: "400",
        fontSize: 15,
        textAlign: "center",
        lineHeight: 22,
    },
    botoesContainer: {
        paddingHorizontal: 24,
        gap: 14,
        alignItems: "center",
    },
    buttonContainer: {
        backgroundColor: "#8730ce",
        borderRadius: 12,
        width: "100%",
        paddingVertical: 16,
    },
    buttonText: {
        color: "#ffffff",
        fontWeight: "800",
        fontSize: 15,
        textAlign: "center",
    },
    linkText: {
        color: "#8730ce",
        fontWeight: "600",
        fontSize: 15,
    },
});
