<template>
    <nav > 
        <v-toolbar class="grey lighten-4" flat app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Ntwrk</span>
                <span>Mgmt</span>
            </v-toolbar-title>
            <v-spacer ></v-spacer>
            <v-btn color="gray" depressed>
                <span >Sign Out</span>
                <v-icon right color="indigo">mdi-exit-to-app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer  v-model="drawer" class="white--text" color="green--text" temporary app>
            <v-list>
                <v-list-item>
                    <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                    </v-list-item-icon> 
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>
            </v-list>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-icon>
                    <v-icon>{{link.icon}} </v-icon>
                    </v-list-item-icon> 
                    <v-list-item-title>{{link.text}} </v-list-item-title>
                </v-list-item>
               
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
data(){
    return {
        drawer: false,
        links : [
            { icon : 'mdi-view-dashboard', text:'Dashboard', route:'/'},
            { icon : 'mdi-folder', text:'Devices', route:'/devices'},
            { icon : 'mdi-account-convert', text:'Problem', route:'/problem'}
        ]
    }
}
}
</script>

<style>

</style>