<script setup>
import {useRoute} from 'vue-router'
import {ref, onBeforeMount} from "vue"
import cars from "../data.json"

const car = ref(null)
const route = useRoute()
const {id} = route.params
onBeforeMount(()=>{
    car.value = cars.find(i=>i.id === parseInt(id))
})

</script>
<template>
    <div class="container">
        <div v-if="car">
            <h1>Марка: {{ car.make }}</h1>
            <h1>Тип кузова: {{ car.body }}</h1>
            <h1>Стоимость: {{ car.price }}</h1>
            <h1>Год выпуска: {{ car.year }}</h1> 
        </div>  
        <div v-else>
            <h1>Такого автомобиля не существует</h1>
        </div>    
    </div>
</template>

<!--{
        "id": 5,
        "make": "Audi",
        "body": "SUV",
        "price": 12242,
        "year": 2011
    },-->