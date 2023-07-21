import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <ProgressBar
                height="4px"
                color="#000000"
                options={{ showSpinner: false }}
                shallowRouting
            />
            {children}

        </>
    );
};

export default ProgressBarProvider;
