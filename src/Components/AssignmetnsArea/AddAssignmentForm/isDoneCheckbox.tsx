import { styled } from '@mui/material/styles';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import { useState } from 'react';
import { Nullable } from 'primereact/ts-helpers';

const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow:
        theme.palette.mode === 'dark'
            ? '0 0 0 1px rgb(16 22 26 / 40%)'
            : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
        theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
            : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
    },
    'input:hover ~ &': {
        backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        background:
            theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&::before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""',
    },
    'input:hover ~ &': {
        backgroundColor: '#106ba3',
    },
});

interface Props {
    setIsDone: (isDone: Nullable<boolean>) => void
}

export default function CustomizedCheckbox(parentProps: Props) {
    const [notDoneChecked, setNotDoneChecked] = useState<boolean>(true);
    const [doneChecked, setDoneChecked] = useState<boolean>(false);

    function BpCheckbox(props: CheckboxProps) {
        return (
            <Checkbox
                sx={{
                    '&:hover': { bgcolor: 'transparent' },
                }}
                disableRipple
                color="default"
                checked={props.checked}
                checkedIcon={<BpCheckedIcon />}
                icon={<BpIcon />}
                onChange={(e) => {
                    // Toggle the checked state based on the current state
                    if (props.name === 'notDone') {
                        setNotDoneChecked(e.target.checked);
                        setDoneChecked(false);
                        parentProps.setIsDone(e.target.checked)
                    } else if (props.name === 'done') {
                        setDoneChecked(e.target.checked);
                        setNotDoneChecked(false);
                        parentProps.setIsDone(e.target.checked)
                    }
                }}
                inputProps={{ 'aria-label': 'Checkbox demo' }}
                {...props}
            />
        );
    }

    return (
        <div>
            <div>
                <div>
                    <h3 style={{ margin: 0 }}>
                        בוצע?
                    </h3>
                </div>
                <div style={{ margin: '0', display: 'flex', flexDirection: 'row', alignItems: 'center', textAlign: 'right' }}>
                    <div>
                        <BpCheckbox name="notDone" checked={notDoneChecked} />
                    </div>
                    <div>
                        <span>
                            לא
                        </span>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', textAlign: 'right' }}>
                    <div>
                        <BpCheckbox name="done" checked={doneChecked} />
                    </div>
                    <div>
                        <span>
                            כן
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}