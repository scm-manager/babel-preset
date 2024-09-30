/*
 * Copyright (c) 2020 - present Cloudogu GmbH
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see https://www.gnu.org/licenses/.
 */

module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV || "production");
  return {
    presets: [
      [
        require("@babel/preset-env"),
        {
          loose: true
        }
      ],
      require("@babel/preset-flow"),
      require("@babel/preset-react"),
      require("@babel/preset-typescript")
    ],
    plugins: [
      require("@babel/plugin-transform-runtime"),
      require("@babel/plugin-syntax-dynamic-import"),
      require("babel-plugin-styled-components")
    ]
  };
};
