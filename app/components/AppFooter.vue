<script setup lang="ts">import { company, navItems } from '~/data/site'</script>
<template><footer class="bg-[#041225] py-16 text-slate-300"><AppContainer>
  <div class="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
    <div class="lg:col-span-2"><div class="inline-flex rounded-2xl bg-white p-3"><img src="/assets/paramount-international-logo.png" alt="Paramount International" class="h-16 w-auto"></div><p class="mt-5 max-w-lg text-sm leading-7 text-slate-400">Enterprise software, digital product engineering, cloud deployment, systems integration and managed IT support for ambitious organizations.</p></div>
    <div><p class="font-bold text-white">Explore</p><div class="mt-4 grid gap-3"><NuxtLink v-for="item in navItems.slice(1)" :key="item.to" :to="item.to" class="text-sm hover:text-[#e0b24d]">{{ item.label }}</NuxtLink></div></div>
    <div><p class="font-bold text-white">Contact</p><div class="mt-4 grid gap-3 text-sm"><a :href="`mailto:${company.email}`" class="hover:text-[#e0b24d]">{{ company.email }}</a><a v-for="phone in company.phones" :key="phone" :href="`tel:+88${phone.replaceAll('-', '')}`" class="hover:text-[#e0b24d]">{{ phone }}</a><p class="leading-6 text-slate-400">{{ company.contactAddress }}</p></div></div>
  </div>
  <div class="flex flex-col gap-3 pt-7 text-xs text-slate-500 sm:flex-row sm:justify-between"><p>© 2026 Paramount International. All rights reserved.</p><p>Global Vision · Reliable Partnership · Sustainable Growth</p></div>
</AppContainer></footer></template>
