import styled from 'styled-components';

export const MSWrapper = styled.div`
    width: 200px;
    margin-right: 20px;
    margin-bottom: 15px;
    &.lg{
        width: 400px;
    }
    label {
        font-size: 12px;
        color: #4a4a4a;
        padding-bottom: 5px;
        display: block;
        sup{
            color: #ed412d;
            vertical-align: top;
        }
    }
    .single-select, .multi-select{
        &.has-value{
            .select__control{
                background-color: #fff;
                border: solid 1px rgba(0,0,0,0.2);
            }
        }
    }
    .multi-select{
        .select__value-container--is-multi{
            min-height: 17px;
            input{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
            }
        }
        .select__option{
            padding-left: 30px;
            &:before{
                content: '';
                width: 12px;
                height: 12px;
                border-radius: 2px;
                border: solid 1px #979797;
                position: absolute;
                left: 10px;
                top: 0;
                bottom: 0;
                margin: auto 0;
            }
            &:after{
                content: '';
                height: 4px;
                width: 8px;
                border-left: 2px solid #fff;
                border-bottom: 2px solid #fff;
                transform: rotate(-45deg);
                position: absolute;
                left: 12px;
                top: 12px;
            }
            &.select__option--is-selected{
                &:before{
                    border-color: #397ffb;
                    background-color: #397ffb;
                }
            }
        }
    } 
    .select__control{
        min-height: 30px;
        border-radius: 4px;
        border: 1px solid rgba(0,0,0,0.04);
        background-color: rgba(0,0,0,0.04);
        &:hover{
            border: 1px solid rgba(0,0,0,0.04);
        }
        &.select__control--is-focused{
            background-color: #fff;
            border: solid 1px rgba(0,0,0,0.2);
            box-shadow: none;
        }
        .select__value-container{
            text-overflow: ellipsis;
            max-width: 90%;
            white-space: nowrap;
            overflow: hidden;
            display: initial;
            font-size: 11px;
        }
        .select__indicator-separator{
            display: none;
        }
        .select__dropdown-indicator{
            padding: 0 5px;
            svg{
                max-width: 16px;
            }
        }
        .select__clear-indicator{
            padding: 0;
            svg{
                max-width: 12px;
            }
        }
    }
    .select__option{
        background-color: #fff !important;
        color: #000;
        font-size: 11px;
        cursor: pointer;
        position: relative;
        padding: 10px;
        & + .select__option{
            border-top: solid 1px rgba(155, 155, 155, 0.2);

        }
    }

`;