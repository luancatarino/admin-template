import Image from "next/image";
import Link from "next/link";
import avatar from "../../../public/images/avatar.svg";
import useAuth from "../../data/hook/useAuth";

interface AvatarUserProps {
    className?: string;
}

export default function AvatarUser(props: AvatarUserProps) {
    const { user } = useAuth();

    return (
        <Link href="/profile">
            <Image
                width={48}
                height={48}
                src={user?.imageURL ?? avatar}
                alt="Avatar"
                className={`
                    h-12 w-12 rounded-full cursor-pointer
                    ${props.className}
                `}
            />
        </Link>
    );
}
