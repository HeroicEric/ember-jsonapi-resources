import Ember from 'ember';
import Resource from '<%= resourcePath %>';
import { attr, hasOne, hasMany } from 'ember-jsonapi-resources/models/resource';

export default Resource.extend({
  type: '<%= resource %>',
  service: Ember.inject.service('<%= resource %>'),

  <%= attrs %>
});
