<template>
  <ul>
   <li v-for="job in data" >
      <h2>
        {{ job.name }}
      </h2>
      <SanityImage :asset-id="job.cover" w="300" />
    </li>
  </ul>
</template>
<script setup>
const query = groq`*[_type == "job"]{ name, "cover": cover.asset._ref }`
const { data } = useSanityQuery(query)
</script>
