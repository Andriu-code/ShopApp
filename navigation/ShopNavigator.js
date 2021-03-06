import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import { Platform, StyleSheet,View } from "react-native";
import { Ionicons } from "@expo/vector-icons"

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import CartScreen from "../screens/shop/CartScreen";
import Colors from "../constants/Colors";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import EditProductScreen from "../screens/user/EditProductScreen";
import UserProductsScreen from "../screens/user/UserProductsScreen";

const defaultNavOptions =  {
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
    },
    headerTitleStyle: {
        fontFamily: "open-sans-bold" 
    },
    headerBackTitleStyle: {
        fontFamily: "open-sans", 
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};


const ProductsNavigator = createStackNavigator({
   ProductsOverview: ProductsOverviewScreen,
   ProductDetail: ProductDetailScreen,
   Cart: CartScreen,
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => 
        <Ionicons 
        name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
        size={23}
        color={drawerConfig.tintColor} />
    },
    defaultNavigationOptions: defaultNavOptions
});

const OrdersNavigator = createStackNavigator(
    {
      Orders: OrdersScreen
    },
    {
      navigationOptions: {
        drawerIcon: drawerConfig => (
          <Ionicons
            name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
            size={23}
            color={drawerConfig.tintColor}
          />
        )
      },
      defaultNavigationOptions: defaultNavOptions
    }
  );

const AdminNavigator = createStackNavigator({
    UserProducts: UserProductsScreen,
    EditProduct: EditProductScreen
},{
    navigationOptions: {
        drawerIcon: drawerConfig =>  
        <Ionicons 
        name={Platform.OS === "android" ? "md-create" : "ios-create"}
        size={23}
        color={drawerConfig.tintColor} />
    },
    defaultNavigationOptions: defaultNavOptions
});

const ShopNavigator = createDrawerNavigator({
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator,
},{
    contentOptions: {
        activeTintColor: Colors.primary,
        labelStyle: {
            marginTop: 50,
            fontFamily: "open-sans-bold"
      
          }
    }
});


export default createAppContainer(ShopNavigator);