'use strict';

function getDependencies(tree) {
  let dependencies = tree && tree.hasOwnProperty('dependencies') ? tree.dependencies : {};

  return Object.keys(dependencies).reduce((all, pkgName) => {
      return all.concat(`${pkgName}@${dependencies[pkgName].version}`, getDependencies(dependencies[pkgName]));
    }, [])
    .reduce((all, listName) => {
      if (all.indexOf(listName) === -1) {
        all.push(listName);
      }
      return all;
    }, [])
    .sort();
}

module.exports = getDependencies;
