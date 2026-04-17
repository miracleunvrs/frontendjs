export type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string }; // Profile ожидает userId
  Settings: undefined;
};

// Типизация для глобального использования useNavigation без пропсов (опционально)
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}