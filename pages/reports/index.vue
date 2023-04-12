<template>
  <div>
       <v-container>
        <v-row justify="center" align="center">
            <v-col cols="12" sm="8" md="6">
                <v-card>
                    <v-card-title>
                        <h1 align="center" class="my-m4">Report</h1>
                    </v-card-title>
                    <v-card-actions>
                         <report-comp></report-comp>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
       </v-container>
    </div>
</template>
<script lang="js">
 definePageMeta({
  layout: 'technician',
});
</script>
