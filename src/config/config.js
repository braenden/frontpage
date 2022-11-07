import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

import convict from 'convict';

const pkgJSONPath = new URL('../../package.json', import.meta.url).pathname;
const pckage = JSON.parse(fs.readFileSync(pkgJSONPath, 'utf8'));

const dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuration schema
const conf = convict({
  env: {
    doc: 'Applicaton environments',
    format: ['development', 'production', 'test'],
    default: 'development',
    env: 'NODE_ENV',
    arg: 'env',
  },

  version: {
    doc: 'Version of the application',
    format: String,
    default: pckage.version,
  },

  name: {
    doc: 'Name of the application',
    format: String,
    default: 'TEMPLATE_APPNAME',
  },

  serverType: {
    doc: 'Which type of server this is',
    format: String,
    default: 'dev',
    env: 'API_SERVER_TYPE',
  },

  serverName: {
    doc: 'The name of the server',
    format: String,
    default: 'dev',
    env: 'API_SERVER_NAME',
  },

  serverRole: {
    doc: 'The role of this server',
    format: String,
    default: 'dev',
    env: 'API_SERVER_ROLE',
  },

  backendType: {
    doc: 'Which type of backend this is',
    format: String,
    default: 'dev',
    env: 'API_BACKEND_TYPE',
  },

  contextPath: {
    doc: 'Context path for the application. Serves as a prefix for the paths in all URLs',
    format: String,
    default: '/TEMPLATE_APPNAME',
  },

  basePath: {
    doc: 'The route the application is served on. This is the route the end user access in the browser',
    format: String,
    default: `/api/${pckage.name}/v1`,
  },

  httpServerPort: {
    doc: 'The port the server should bind to',
    format: 'port',
    default: 8080, // Change this to your port
    env: 'PORT',
    arg: 'port',
  },

  httpAccessLogLevel: {
    doc: 'Enable logging of requests (accessLog)',
    format: String,
    default: 'debug',
    env: 'HTTP_ACCESS_LOG',
  },

  logLevel: {
    doc: 'Which level the console transport log should log at',
    format: String,
    default: 'info',
    env: 'LOG_LEVEL',
  },

  prettyLog: {
    doc: 'Turn log pretty printing on and off',
    format: Object,
    default: null,
    nullable: true,
    env: 'LOG_PRETTY_PRINT',
  },

  hostName: {
    doc: 'Hostname',
    format: String,
    default: 'localhost',
    env: 'HOSTNAME',
  },

  clusterName: {
    doc: 'Cluster this app is running on',
    format: String,
    default: 'dev',
    env: 'CLUSTER_NAME',
  },

  influxdbHost: {
    doc: 'Hostname for influxdb',
    format: String,
    default: 'localhost',
    env: 'INFLUXDB_HOST',
  },

  influxdbPort: {
    doc: 'Port for influxdb',
    format: 'port',
    default: 8086,
    env: 'INFLUXDB_PORT',
  },

  manifestHost: {
    doc: 'Host to add to manifests',
    format: String,
    default: 'http://localhost:8080', // Change this to your port
    env: 'MANIFEST_HOST',
  },

  manifestEnv: {
    doc: 'What env to send component to in @amedia/create-component',
    format: String,
    default: 'disabled',
    env: 'MANIFEST_ENV',
  },
});

// Load config files

if (fs.existsSync(path.resolve(dirname, '../../config/local.json'))) {
  conf.loadFile([path.resolve(dirname, '../../config/local.json')]);
} else {
  conf.loadFile([
    path.resolve(dirname, '../../config/', `${conf.get('env')}.json`),
  ]);
}

// Validate all properties and export it
conf.validate();

export default conf;