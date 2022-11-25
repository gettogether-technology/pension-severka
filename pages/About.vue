<template>
    <div class="about-page">
        <TheHeroPages title="O penzionu"/>
        <TheAbout>
            <template v-slot:content>
               <p>
                    Vítejte v penzionu <strong>Severka v Orlických horách.</strong> 
                    Penzion se nachází na samotě v <strong>Horní Rokytnici</strong> 
                    asi <strong>3 km od centra města Rokytnice v Orlických horách.</strong> 
                    Nedaleko protéka říčka Rokytenka.
                </p>
                <p class="mt-4">
                    Nabízíme Vám ubytování v Rokytnici v Orlických horách, 
                    nedaleko známého <strong>lyžařského střediska Říčky.</strong> Máme pro Vás 
                    připraveno <strong>22 lůžek v 7 pokojích.</strong> Pro malé dítě máme také 
                    postýlku. 
                </p>
                <p class="mt-4">
                    <strong>Pronajmout si můžete kompletně celý penzion,</strong> 
                    případně přízemí a podkroví (každé má svoji kuchyň a 
                    společenskou místnost), nebo jednotlivé pokoje.
                </p>
            </template>
        </TheAbout>

        <TheBenefits
            :data="benefits"
         />
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const benefits = [
            {
                title: 'Pronájem',
                content: 'Pronajmout si můžete kompletně celý penzion, případně přízemí a podkroví (každé má svoji kuchyň a společenskou místnost), nebo jednotlivé pokoje.'
            },
            {
                title: 'Penzion',
                content: 'Penzion je zejména vhodný pro soustředění sportovních oddílů, školní výlety, menší dětské tábory, rodinné akce a setkání, firemní  školení a kurzy.'
            },
            {
                title: 'Prosředí',
                content: 'Nabízím klid a samotu a také výhodu, že zde nebudete nikoho rušit, protože v okolí nejsou žádné domy.'
            },
            {
                title: 'Penzion',
                content: 'K dispozici budete mít kompletně celý penzion, včetně všech dalších prostor.'
            },
            {
                title: 'Další místnosti',
                content: 'Dvě společenské místnosti, dvě plně vybavené kuchyně, suterén s 2 infrasaunou a odpočívárnou.'
            },
            {
                title: 'Stravování',
                content: 'Stravovat se můžete sami nebo navštívit množství blízkých restaurací.'
            },
            {
                title: 'Stravování',
                content: 'K vašemu stravování Vám při ubytování v Orlických horách mohu nabídnout i dovoz čerstvého pečiva z pekárny v Falta z Králik.'
            },
            {
                title: 'Služby v okolí',
                content: 'Návštěva masážního salonu. Nedaleko našeho penzionu (dojezd autem asi 4 minuty) vám zprostředkujeme návštěvu masážního salonu pana Rudolfa Galle.'
            },
        ]

        return {
            benefits
        }
    },
})
</script>

<style lang="scss" scoped>
h2 {
    font-size: 22px;
}

</style>
