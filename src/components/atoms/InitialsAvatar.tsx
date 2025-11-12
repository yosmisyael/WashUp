import {getInitials} from "@/lib/utils";

type InitialsAvatarProps = {
    name: string;
    size?: number;
    className?: string;
};

export const InitialsAvatar: React.FC<InitialsAvatarProps> = ({
                                                                  name,
                                                                  size = 32,
                                                                  className = ''
                                                              }) => {

    const initials: string = getInitials(name);

    const style = {
        width: `${size}px`,
        height: `${size}px`,
        fontSize: `${Math.floor(size / 2.5)}px`,
    };

    return (
        <div
            style={style}
            className={`
        rounded-full flex items-center justify-center 
        font-semibold text-white bg-indigo-500
        overflow-hidden relative flex-shrink-0
        ${className}
      `}
        >
            <span>{initials}</span>
        </div>
    );
};