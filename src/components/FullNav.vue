<template>
    <div>
        <q-btn
            flat
            dense
            round
            icon="mdi-text"
            aria-label="Menu"
            class="flip"
            @click="dialog = true"
        />
        <q-dialog v-model="dialog" maximized>
            <q-card class="bg-blue-grey-9 full-width full-height">
                <div class="row justify-end">
                    <q-btn icon="mdi-close" flat round v-close-popup></q-btn>
                </div>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
export default {
    data () {
        return {
            dialog: false
        }
    }
}
</script>