import cls from './Loader.module.css';

export const Loader = () => {
    return (
        <div className={cls.container}>
            <div className={cls.loader} />
        </div>
    );
};
