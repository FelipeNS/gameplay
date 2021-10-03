import React from 'react';
import { 
  Text,
  View,
  Image,
  Alert,
  ActivityIndicator
} from 'react-native';

import { useAuth } from '../../hooks/auth';

import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

import illustration from '../../assets/illustration.png';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function SignIn() {
  const { loading, signIn, } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
  }

  return (
    <Background>
      <View style={styles.container} >
        <Image 
          source={illustration} 
          style={styles.image} 
          resizeMode="stretch"
        />
        <View style={styles.content} >
          <Text style={styles.title} >
            Organize {`\n`}
            suas jogatinas {`\n`}
            facilmente
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>
          {
            loading ? <ActivityIndicator color={theme.colors.primary} /> :
            <ButtonIcon 
              title="Entrar com o Discord"
              activeOpacity={0.7}
              onPress={handleSignIn}
            />
          }
        </View>
      </View>
    </Background>
  );
}
