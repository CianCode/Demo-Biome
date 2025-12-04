// 📦 IMPORT SORTING DEMO
// This file has unsorted imports that Biome will organize

// Third party imports (unsorted)
import axios from 'axios';
import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import lodash from 'lodash';
import { format } from 'date-fns';
import express from 'express';

// Local imports (unsorted)
import { helperFunction } from '../utils/helpers';
import config from '../../config';
import { UserService } from '../services/userService';
import { validateEmail } from '../utils/validation';
import Button from '../components/Button';
import { API_URL } from '../constants';

// Side effect imports
import './styles.css';
import '../global.css';

// Type imports (for TypeScript)
// import type { User } from '../types';
// import type { Config } from '../config';

// Default and named imports mixed
import defaultExport, { namedExport1, namedExport2 } from './module';

// Namespace imports
import * as utils from '../utils';

// The component using these imports
function ImportDemo() {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        // Using various imports
        const url = API_URL + '/users';
        console.log(url);
    }, []);
    
    return React.createElement('div', null, 'Import Demo');
}

export default ImportDemo;
