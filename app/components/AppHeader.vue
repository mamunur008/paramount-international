<script setup lang="ts">
import { navItems } from '~/data/site'
const open = ref(false)
const route = useRoute()
watch(() => route.path, () => open.value = false)
</script>
<template>
  <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
    <AppContainer><div class="flex h-20 items-center justify-between gap-5">
      <NuxtLink to="/" aria-label="Paramount International home" class="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90"><img src="/assets/paramount-mark.png" alt="" class="h-14 w-14 rounded-xl object-cover"><span class="leading-none"><span class="block text-lg font-black tracking-[.16em] text-[#071d3d]">PARAMOUNT</span><span class="mt-1 block text-[.68rem] font-bold tracking-[.28em] text-[#b57b10]">INTERNATIONAL</span></span></NuxtLink>
      <nav class="hidden items-center gap-5 xl:flex" aria-label="Primary navigation"><NuxtLink v-for="item in navItems" :key="item.to" :to="item.to" class="text-sm font-semibold text-slate-600 transition hover:text-[#b57b10]" active-class="!text-[#b57b10]">{{ item.label }}</NuxtLink><NuxtLink to="/contact" class="rounded-full bg-[#071d3d] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#123965]">Discuss a project</NuxtLink></nav>
      <button class="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-xl text-[#071d3d] xl:hidden" :aria-expanded="open" aria-label="Toggle menu" @click="open = !open">{{ open ? '×' : '☰' }}</button>
    </div></AppContainer>
    <nav v-if="open" class="border-t border-slate-200 bg-white px-5 py-5 xl:hidden"><div class="mx-auto flex max-w-7xl flex-col gap-1"><NuxtLink v-for="item in navItems" :key="item.to" :to="item.to" class="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-[#f5f1e8] hover:text-[#b57b10]">{{ item.label }}</NuxtLink></div></nav>
  </header>
</template>
