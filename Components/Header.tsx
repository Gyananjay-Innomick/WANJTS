
import { useState } from 'react';
import { useRouter } from 'next/router';
import Select, { SingleValue } from 'react-select';
import { useTranslation } from 'next-i18next';
import Image from "next/image";

export default function Header() {

    const { locale, locales, push, pathname, query, asPath } = useRouter();
    const [selectedLang, setLang] = useState({ value: locale, label: locale })
    const { t } = useTranslation('home')

    const handleLangChange = (event: SingleValue<{ value: string | undefined; label: string | undefined; }>) => {
        if (event && event.value) {
            push({ pathname, query }, asPath, { locale: event.value })
            return setLang(event);
        }
        return;
    }

    const langOptions: { value: string, label: string }[] = [];
    locales?.map((l) => {
        langOptions.push({ value: l, label: l });
    })

    return (
        <header>
            <div>
                <Image
                    src={`/logo.png`}
                    alt="logo"
                    height='40'
                    width='40'
                    sizes="100vw" />
            </div>
            <h1 style={{ textAlign: "center" }}>{t("heading")}</h1>
            <div className='lang_select'>
                <Select
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? '#4361ee' : '#585858',
                            backgroundColor: "#585858",
                            minHeight: '35px',
                        }),
                        option: (baseStyle) => ({
                            ...baseStyle,
                            color: 'black',
                        }),
                        singleValue: (baseStyles) => ({
                            ...baseStyles,
                            color: "white"
                        })
                    }}
                    classNamePrefix="lang-select"
                    defaultValue={selectedLang}
                    options={langOptions}
                    onChange={(event) => handleLangChange(event)}
                />
            </div>
        </header>
    )
}