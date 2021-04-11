import React, {useRef, useEffect} from 'react';
import styled from 'styled-components/native';
import {Animated} from 'react-native';

const EMPTY_COLOR = '#a0a0a1';
const PROGRESS_COLOR = '#0085FF';
const SIZE = 200;

const EmptyCircle = styled.View`border-color: $(EMPTY_COLOR);`
    
    justify-content: center;
    align-items: center
