<script setup lang="ts">
</script>

<template>
  <main>
        <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    <h1>Lieder Übersicht</h1>
    <h3 class="my-3">L</h3>
    <ul class="list-group">
      <li class="list-group-item"><router-link to="/song">La Paloma</router-link></li>
    </ul>
    <h3 class="my-3">A</h3>
    <ul class="list-group">
      <li class="list-group-item">Ade zur guten Nacht</li>
      <li class="list-group-item">Alle Vögel sind schon da</li>
      <li class="list-group-item">An einem Sommermorgen</li>
      <li class="list-group-item">Auf du junger Wandersmann</li>
    </ul>
    <h3 class="my-3">B</h3>
    <ul class="list-group">
      <li class="list-group-item">Backe, backe Kuchen</li>
      <li class="list-group-item">Brüderchen, komm tanz mit mir</li>
      <li class="list-group-item">Bona nox, bis a rechter Ochs</li>
    </ul>
    <h3 class="my-3">D</h3>
    <ul class="list-group">
      <li class="list-group-item">Der Mond ist aufgegangen</li>
      <li class="list-group-item">Der Hampelmann</li>
      <li class="list-group-item">Das bucklige Männlein</li>
      <li class="list-group-item">Die goldene Brücke</li>
      <li class="list-group-item">Die Tiroler sind lustig</li>
      <li class="list-group-item">Dona nobis pacem</li>
    </ul>
    <h3 class="my-3">D</h3>
    <ul class="list-group">
      <li class="list-group-item">Der Mond ist aufgegangen</li>
      <li class="list-group-item">Der Hampelmann</li>
      <li class="list-group-item">Das bucklige Männlein</li>
      <li class="list-group-item">Die goldene Brücke</li>
      <li class="list-group-item">Die Tiroler sind lustig</li>
      <li class="list-group-item">Dona nobis pacem</li>
    </ul>
  </main>
</template>
