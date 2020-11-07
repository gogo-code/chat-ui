---
#  h.changeCase.lcFirst(name)把首字母改为小写
to: src/components/<%= name %>/<%= h.changeCase.lcFirst(name) %>.stories.js
---
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import <%= name %> from ".";

export default {
  title: "<%= name %>",
  component: <%= name %>
};

export const Default = () => <<%= name %>>默认</<%= name %>>;