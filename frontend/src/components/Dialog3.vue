<template>
    <div class="text-center">
        <v-dialog
            width="1200"
        >
            <template v-slot:activator="{ on }">
                <v-btn
                    color="red lighten-2"
                    dark
                    v-on="on"
                >
                    어드민 보기
                </v-btn>
            </template>

            <v-card>
                <v-card-title
                    class="headline grey lighten-2"
                    primary-title
                >
                    Privacy Policy
                </v-card-title>
                
                <v-carousel hide-delimiters height="100%">
                    <v-carousel-item
                    v-for="i in 13"
                    :key="i"
                    :src="require('../assets/img/snapfit/admin/'+i+'.png')"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    ></v-carousel-item>
                </v-carousel>
            </v-card>
        </v-dialog>

        <v-dialog
            width="1200"
        >
            <template v-slot:activator="{ on }">
                <v-btn
                    color="red lighten-2"
                    dark
                    v-on="on"
                >
                    클라이언트 보기
                </v-btn>
            </template>

            <v-card>
                <v-card-title
                    class="headline grey lighten-2"
                    primary-title
                >
                    Privacy Policy
                </v-card-title>
                
                <v-carousel hide-delimiters height="100%">
                    <v-carousel-item
                    v-for="i in 3"
                    :key="i"
                    :src="require('../assets/img/snapfit/front/'+i+'.png')"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    ></v-carousel-item>
                </v-carousel>
            </v-card>
        </v-dialog>

    </div>
</template>
