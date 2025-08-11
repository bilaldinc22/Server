// packages/Gamemode/sequelize.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'zap851638-1',           // DB-Name
  'zap851638-1',           // Benutzer
  'dzxLd4FeWdF2FjTK',      // Passwort
  {
    host: 'mysql-mariadb-1-25.zap-srv.com',
    port: 3306,
    dialect: 'mariadb',
    dialectModule: require('mysql2'),
    logging: false,
    pool: { max: 10, min: 0, acquire: 20000, idle: 10000 },
    define: { freezeTableName: true }
    // KEINE Extras wie serverVersion/foundRows/initSql – die verursachen Warnungen/Fehler
  }
);

// Kompatibilität für alte Models:
global.sequelize = sequelize;
global.Sequelize = Sequelize;

// Healthcheck
(async () => {
  try { await sequelize.authenticate(); console.log('[INV][DB] MySQL/MariaDB OK'); }
  catch (e) { console.log('[INV][DB] Verbindungsfehler:', e.message); }
})();

module.exports = { sequelize, Sequelize };
