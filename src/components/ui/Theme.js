import { createTheme } from '@material-ui/core/styles'


export default createTheme({
    ButtonStyle: {
        heroColor_GetStarted : {
            padding: '10px 32px',
            border: '1px solid #f84e59',
            borderRadius: '4px',
            backgroundColor: '#f84e59',
            transition: '.2s ease-in-out',
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: '700',
            textAlign: 'center',
            color: '#fff',
            cursor: 'pointer',
            marginRight: '25px',
        },
        heroColor_ReqDemo : {
            padding: '10px 32px',
            border: '1px solid #020d1e',
            borderRadius: '4px',
            backgroundColor: '#020d1e',
            transition: '.2s ease-in-out',
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: '700',
            textAlign: 'center',
            color: '#fff',
            cursor: 'pointer',
            marginRight: '25px',
        }
    },
    borderLine : {
        greenBorderLine : {
            border: '1px solid green',
        },
        redBorderLine : {
            border: '1px solid red',
        },
        pinkBorderLine : {
            border: '1px solid pink',
        }
    },
    displayArea : {
        displayFlex : {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    }
});