import 'angular';
import 'angular-mocks/angular-mocks';
import 'angular-resource';
import 'angular-sanitize';
import 'angular-ui-router';
import 'angular-material';

var testsContext = require.context("./unit", true, /.spec$/);
testsContext.keys().forEach(testsContext);