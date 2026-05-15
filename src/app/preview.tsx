import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";

const CORES: Record<string, string> = {
    azul: "#8730ce",
    verde: "#22C55E",
    roxa: "#A855F7",
};

function getLevel(anos: string) {
    const n = parseInt(anos, 10);
    if (isNaN(n) || n <= 0) return "Iniciante";
    if (n <= 2) return "Júnior";
    if (n <= 5) return "Pleno";
    if (n <= 8) return "Sênior";
    return "Expert";
}

export default function previewScreen() {
    const router = useRouter();
    const { nome, cargo, empresa, anos, tecnologia, cor } = useLocalSearchParams<{
        nome: string;
        cargo: string;
        empresa: string;
        anos: string;
        tecnologia: string;
        cor: string;
    }>();

    const cardColor = CORES[cor ?? "azul"] ?? "#8730ce";
    const inicial = nome ? nome.charAt(0).toUpperCase() : "?";
    const nivel = getLevel(anos ?? "");

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.pageTitle}>Seu Cartão</Text>

                <View style={[styles.card, { backgroundColor: cardColor }]}>
                    <View style={styles.decCircle1} />
                    <View style={styles.decCircle2} />

                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>{inicial}</Text>
                    </View>

                    <Text style={styles.devName}>{nome}</Text>
                    <Text style={styles.devCargo}>{cargo}</Text>
                    {empresa ? <Text style={styles.devEmpresa}>{empresa}</Text> : null}

                    <View style={styles.divider} />

                    <Text style={styles.especialistaLabel}>Especialista em</Text>
                    <Text style={styles.tecnologia}>{tecnologia}</Text>

                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>{nivel}</Text>
                    </View>

                    <Text style={styles.anosText}>
                        {anos ? `${anos} anos de experiência` : "Experiência a definir"}
                    </Text>
                </View>
            </View>

            <View style={styles.botoesContainer}>
                <TouchableOpacity
                    style={styles.buttonOutline}
                    onPress={() => router.back()}
                >
                    <Text style={styles.buttonOutlineText}>Editar dados</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => router.push("/sucesso")}
                >
                    <Text style={styles.buttonText}>Finalizar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "space-between",
    },
    container: {
        flex: 1,
        padding: 24,
    },
    pageTitle: {
        color: "#8730ce",
        fontWeight: "bold",
        fontSize: 28,
        marginBottom: 24,
    },
    card: {
        borderRadius: 24,
        padding: 32,
        alignItems: "center",
        overflow: "hidden",
    },
    decCircle1: {
        position: "absolute",
        top: -40,
        right: -40,
        width: 160,
        height: 160,
        borderRadius: 80,
        backgroundColor: "#ffffff18",
    },
    decCircle2: {
        position: "absolute",
        bottom: -30,
        left: -30,
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: "#ffffff10",
    },
    avatar: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 14,
    },
    avatarText: {
        fontSize: 30,
        fontWeight: "800",
        color: "#333",
    },
    devName: {
        fontSize: 22,
        fontWeight: "800",
        color: "#fff",
        marginBottom: 4,
    },
    devCargo: {
        fontSize: 14,
        color: "#ffffffCC",
        marginBottom: 2,
    },
    devEmpresa: {
        fontSize: 13,
        color: "#ffffff99",
    },
    divider: {
        width: 40,
        height: 1,
        backgroundColor: "#ffffff44",
        marginVertical: 18,
    },
    especialistaLabel: {
        fontSize: 12,
        color: "#ffffffAA",
        marginBottom: 6,
    },
    tecnologia: {
        fontSize: 20,
        fontWeight: "800",
        color: "#fff",
        marginBottom: 14,
    },
    badge: {
        backgroundColor: "#F59E0B",
        paddingHorizontal: 18,
        paddingVertical: 6,
        borderRadius: 20,
        marginBottom: 12,
    },
    badgeText: {
        color: "#fff",
        fontWeight: "800",
        fontSize: 13,
    },
    anosText: {
        fontSize: 13,
        color: "#ffffffAA",
    },
    botoesContainer: {
        padding: 24,
        gap: 12,
    },
    buttonOutline: {
        borderWidth: 1.5,
        borderColor: "#8730ce",
        borderRadius: 12,
        paddingVertical: 15,
    },
    buttonOutlineText: {
        color: "#8730ce",
        fontWeight: "800",
        fontSize: 15,
        textAlign: "center",
    },
    buttonContainer: {
        backgroundColor: "#8730ce",
        borderRadius: 12,
        paddingVertical: 15,
    },
    buttonText: {
        color: "#ffffff",
        fontWeight: "800",
        fontSize: 15,
        textAlign: "center",
    },
});
