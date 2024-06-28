import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import { theme } from '../../theme';
import {
  CalendarDaysIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from 'react-native-heroicons/outline';

import { debounce } from 'lodash';
import { fetchLocations } from '../../api/weather';

const HomeScreen = () => {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([]);

  const handleSearch = (value) => {
    const cityName = value.target.value;
    if (cityName.length > 2) {
      fetchLocations({ cityName }).then((data) => setLocations(data));
    }
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <View className="flex-1 relative">
        <StatusBar style="light" />
        <Image
          blurRadius={70}
          source={require('../../assets/images/bg.png')}
          className="absolute h-full w-full "
        />
        <SafeAreaView className="flex flex-1">
          <View
            style={{
              height: '7%',
              paddingTop: Constants.statusBarHeight,
              marginBottom: Keyboard.isVisible && 60,
            }}
            className="mx-4 relarive z-50"
          >
            <View
              className="flex-row justify-end items-center rounded-full"
              style={{
                backgroundColor: showSearch
                  ? theme.bgWhite(0.2)
                  : 'transparent',
                minHeight: 57,
              }}
            >
              {showSearch ? (
                <TextInput
                  onChange={handleTextDebounce}
                  placeholder="Search city"
                  placeholderTextColor={'lightgray'}
                  className="pl-7 h-10 pb-1 flex-1 text-base text-white"
                />
              ) : null}
              <TouchableOpacity
                onPress={() => toggleSearch(!showSearch)}
                style={{ backgroundColor: theme.bgWhite(0.3) }}
                className="rounded-full p-3 m-1"
              >
                <MagnifyingGlassIcon size="25" color="white" />
              </TouchableOpacity>
            </View>
            {locations.length > 0 && showSearch ? (
              <View
                className="absolute w-full bg-gray-300 rounded-3xl"
                style={{ top: Platform.OS === 'web' ? 62 : 110 }}
              >
                {locations.map((loc, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      className="flex-row items-center border-0 p-3 px-4 mb-1"
                    >
                      <MapPinIcon size="20" color="gray" />
                      <Text className="text-black text-lg ml-2">
                        London, United kingdom
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
          </View>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View
              className="mx-4 flex justify-around flex-1 mb-2"
              style={{ maxHeight: 200 }}
            >
              <Text className="text-white text-center text-2xl font-bold">
                London,
                <Text className="text-lg font-semibold text-gray-300">
                  United Kingdom
                </Text>
              </Text>
            </View>
            <View className="flex-row justify-center">
              <Image
                source={require('../../assets/images/partlycloudy.png')}
                className="w-52 h-52"
              />
            </View>
            <View className="space-y-2">
              <Text className="text-center font-bold text-white text-6xl ml-5 mt-10">
                23&#176;
              </Text>
              <Text className="text-center text-white text-xl tracking-widest">
                Partly cloudy
              </Text>
            </View>
            <View className="flex-row justify-between mx-4 mt-5 mb-5">
              <View className="flex-row space-x-2 items-center">
                <Image
                  source={require('../../assets/icons/wind.png')}
                  className="h-6 w-6"
                />
                <Text className="text-white font-semibold text-base">22km</Text>
              </View>
              <View className="flex-row space-x-2 items-center">
                <Image
                  source={require('../../assets/icons/drop.png')}
                  className="h-6 w-6"
                />
                <Text className="text-white font-semibold text-base">23%</Text>
              </View>
              <View className="flex-row space-x-2 items-center">
                <Image
                  source={require('../../assets/icons/sun.png')}
                  className="h-6 w-6"
                />
                <Text className="text-white font-semibold text-base">
                  6:05 AM
                </Text>
              </View>
            </View>
            <View className="flex-row justify-between space-y-3">
              <View className="flex-row items-center mx-5 space-x-2">
                <CalendarDaysIcon size="22" color="white" />
                <Text className="text-white text-base">Daily forecast</Text>
              </View>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4">
                <Image
                  source={require('../../assets/images/heavyrain.png')}
                  className="h-11 w-11"
                />
                <Text className="text-white">Monday</Text>
                <Text className="text-white">13&#176;</Text>
              </View>
              <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4">
                <Image
                  source={require('../../assets/images/heavyrain.png')}
                  className="h-11 w-11"
                />
                <Text className="text-white">Tuesday</Text>
                <Text className="text-white">16&#176;</Text>
              </View>
              <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4">
                <Image
                  source={require('../../assets/images/heavyrain.png')}
                  className="h-11 w-11"
                />
                <Text className="text-white">Monday</Text>
                <Text className="text-white">13&#176;</Text>
              </View>
              <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4">
                <Image
                  source={require('../../assets/images/heavyrain.png')}
                  className="h-11 w-11"
                />
                <Text className="text-white">Monday</Text>
                <Text className="text-white">13&#176;</Text>
              </View>
              <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4">
                <Image
                  source={require('../../assets/images/heavyrain.png')}
                  className="h-11 w-11"
                />
                <Text className="text-white">Monday</Text>
                <Text className="text-white">13&#176;</Text>
              </View>
              <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4">
                <Image
                  source={require('../../assets/images/heavyrain.png')}
                  className="h-11 w-11"
                />
                <Text className="text-white">Monday</Text>
                <Text className="text-white">13&#176;</Text>
              </View>
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default HomeScreen;
