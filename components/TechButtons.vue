<template>
    <div>
       <v-container>
        <v-row justify="center" align="center">
            <v-col cols="12" sm="10" md="8">
                <v-card>
                    <v-card-title>
                        <slot name="heade">
                        <h1 align="center" class="my-m4">Manage Ticket / Product</h1>
                        </slot>
                    </v-card-title>
                    <v-card-actions>
                        <slot name="actions">
                            <NuxtLink to="/products/"
                            ><v-btn color="blue">Product</v-btn></NuxtLink>
                            <NuxtLink to="/tickets/manage-ticket/"
                            ><v-btn color="blue">Ticket</v-btn></NuxtLink>
                            <NuxtLink to="/clients" class="ml-4 "
                            ><v-btn color="blue"> Clients</v-btn></NuxtLink>
                            <NuxtLink to="/reports" class="ml-4 "
                            ><v-btn color="blue">Generate Reports</v-btn></NuxtLink>
                        </slot>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
       </v-container>
    </div>
</template>

<script>
export default {}
</script>

<style>
#w-100{
    width :100%;
}
</style>

