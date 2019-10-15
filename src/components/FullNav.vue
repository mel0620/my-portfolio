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
        <q-dialog v-model="dialog" maximized position="left">
            <q-card class="full-width full-height">
                <div class="row justify-end">
                    <q-btn icon="mdi-close" flat round v-close-popup></q-btn>
                </div>
                <div class="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cumque consectetur eos veniam. Enim a autem commodi repellendus iste eaque eligendi placeat saepe iure! Itaque cum sapiente, iusto incidunt sunt maiores omnis iure sed obcaecati eum culpa saepe animi, nobis necessitatibus! Temporibus porro debitis quasi enim autem veniam repellendus illum.
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