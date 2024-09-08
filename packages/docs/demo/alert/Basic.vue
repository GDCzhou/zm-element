<template>
  <h2>通过 slot 传入内容</h2>
  <div style="max-width: 600px">
    <z-alert type="success">Success alert</z-alert>
    <z-alert type="info">Info alert</z-alert>
    <z-alert type="warning">Warning alert</z-alert>
    <z-alert type="danger">Error alert</z-alert>
  </div>
  <h2>通过 prop 传入内容</h2>
  <div style="max-width: 600px">
    <z-alert type="success" title="Success alert" />
    <z-alert type="info" title="Info alert" />
    <z-alert type="warning" title="Warning alert" />
    <z-alert type="danger" title="Error alert" />
  </div>
</template>
