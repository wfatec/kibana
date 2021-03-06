/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React from 'react';
import { Redirect } from 'react-router-dom';

export const TIMELINES_PAGE_NAME = 'timelines';

export const RedirectToTimelinesPage = () => <Redirect to={`/${TIMELINES_PAGE_NAME}`} />;

export const getTimelinesUrl = () => `#/link-to/${TIMELINES_PAGE_NAME}`;
