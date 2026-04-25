import { StatusBar } from 'expo-status-bar';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { RootStackParamList } from '../navigation/AppNavigator';

const summaryItems = [
  { label: 'Entradas', value: 'R$ 4.250,00', tone: 'positive' },
  { label: 'Saídas', value: 'R$ 2.180,00', tone: 'negative' },
  { label: 'Reservas', value: 'R$ 1.400,00', tone: 'neutral' },
] as const;

const recentItems = [
  { title: 'Mercado', category: 'Despesa diária', value: '- R$ 84,90' },
  { title: 'Salário', category: 'Receita', value: '+ R$ 3.800,00' },
  { title: 'Reserva mensal', category: 'Dinheiro guardado', value: '- R$ 500,00' },
] as const;

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.appName}>Meu Caixa</Text>
          <Text style={styles.subtitle}>
            Um controle simples para acompanhar seu dinheiro no dia a dia.
          </Text>
        </View>

        <View style={styles.balanceCard}>
          <Text style={styles.cardLabel}>Saldo atual</Text>
          <Text style={styles.balanceValue}>R$ 2.070,00</Text>
          <Text style={styles.cardHint}>Resumo visual com dados de exemplo</Text>
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={() => navigation.navigate('Transactions')}
          style={({ pressed }) => [styles.primaryButton, pressed && styles.primaryButtonPressed]}
        >
          <Text style={styles.primaryButtonText}>Ver registros</Text>
        </Pressable>

        <View style={styles.summaryGrid}>
          {summaryItems.map((item) => (
            <View key={item.label} style={styles.summaryCard}>
              <Text style={styles.summaryLabel}>{item.label}</Text>
              <Text style={[styles.summaryValue, styles[item.tone]]}>{item.value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Últimos registros</Text>

          <View style={styles.list}>
            {recentItems.map((item) => (
              <View key={item.title} style={styles.listItem}>
                <View style={styles.listTextGroup}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemCategory}>{item.category}</Text>
                </View>
                <Text style={styles.itemValue}>{item.value}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },
  container: {
    padding: 24,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 24,
  },
  appName: {
    color: '#111827',
    fontSize: 32,
    fontWeight: '700',
  },
  subtitle: {
    color: '#4B5563',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
  },
  balanceCard: {
    backgroundColor: '#111827',
    borderRadius: 8,
    padding: 24,
    marginBottom: 16,
  },
  cardLabel: {
    color: '#D1D5DB',
    fontSize: 14,
    fontWeight: '600',
  },
  balanceValue: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '700',
    marginTop: 8,
  },
  cardHint: {
    color: '#A7F3D0',
    fontSize: 13,
    marginTop: 12,
  },
  primaryButton: {
    alignItems: 'center',
    backgroundColor: '#047857',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
  },
  primaryButtonPressed: {
    opacity: 0.85,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  summaryGrid: {
    gap: 12,
    marginBottom: 28,
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E7EB',
    borderRadius: 8,
    borderWidth: 1,
    padding: 18,
  },
  summaryLabel: {
    color: '#6B7280',
    fontSize: 13,
    fontWeight: '600',
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 6,
  },
  positive: {
    color: '#047857',
  },
  negative: {
    color: '#B91C1C',
  },
  neutral: {
    color: '#1D4ED8',
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    color: '#111827',
    fontSize: 20,
    fontWeight: '700',
  },
  list: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E7EB',
    borderRadius: 8,
    borderWidth: 1,
  },
  listItem: {
    alignItems: 'center',
    borderBottomColor: '#F3F4F6',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  listTextGroup: {
    flex: 1,
    paddingRight: 16,
  },
  itemTitle: {
    color: '#111827',
    fontSize: 15,
    fontWeight: '700',
  },
  itemCategory: {
    color: '#6B7280',
    fontSize: 13,
    marginTop: 4,
  },
  itemValue: {
    color: '#111827',
    fontSize: 14,
    fontWeight: '700',
  },
});
