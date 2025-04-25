import { Icon } from "@iconify/react";
import { useCallback, useEffect, useState } from "react";

export default function FakeUser() {
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(false);

    const loadUser = useCallback(async () => {
        setLoading(true);
        let resp = await fetch("https://randomuser.me/api/");
        let data = await resp.json();
        let fakeUser = data.results[0];
        let _user = {
            name: `${fakeUser.name.first} ${fakeUser.name.last}`,
            email: fakeUser.email,
            username: fakeUser.login.username,
            urlPhoto: fakeUser.picture.medium,
        };
        setUser(_user);
        setLoading(false);
    }, []);

    useEffect(() => {
        loadUser();
    }, [loadUser]);

    return (
        <>
            <div className="flex items-center justify-between gap-1 bg-gray-200 my-1 p-2 rounded-lg">
                <div className="flex items-center gap-4">
                    <div>
                        <img src={user.urlPhoto} alt={user.name} className="w-18 h-18 rounded-lg border-2 border-gray-400" />
                    </div>
                    <div className="leading-5">
                        <div className="font-semibold">
                            {user.name}
                        </div>
                        <div>
                            {user.username && `@${user.username}`}
                        </div>
                        <div className="text-gray-500">
                            {user.email}
                        </div>
                    </div>
                </div>
                <div
                    className={`bg-gray-400 p-1 rounded-lg flex items-center cursor-pointer hover:bg-gray-500 ${loading ? 'opacity-50 pointer-events-none' : ''
                        }`}
                    onClick={loadUser}
                >
                    <Icon icon="mdi-refresh" className={`text-black text-3xl ${loading ? 'animate-spin' : ''}`} />
                </div>
            </div>
        </>
    );
}