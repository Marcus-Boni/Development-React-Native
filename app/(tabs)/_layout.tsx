import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'home' : 'home-outline'}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'code-slash' : 'code-slash-outline'}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="Login"
        options={{
          title: 'Login',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'person' : 'person-outline'}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="Register"
        options={{
          title: 'Register',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'person-add' : 'person-add-outline'}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="Dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'logo-codepen' : 'logo-codepen'}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="Perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'accessibility' : 'accessibility-outline'}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'settings' : 'settings-outline'}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="ForgotPassword"
        options={{
          title: 'Esqueci Senha',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'accessibility' : 'accessibility'}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="NovoItem"
        options={{
          title: 'Novo Item',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'add' : 'add-circle'}
              color={color}
            />
          )
        }}
      />
    </Tabs>
  );
}
