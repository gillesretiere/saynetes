import React, { useContext, useEffect, useState, } from 'react';
import { base_server_url, } from "../../assets/localData/data.js";
import { UserContext } from '../../store/user_context.jsx';
import { useNavigate } from 'react-router-dom';


const StoryCard = ({ card, }) => {
    const navigate = useNavigate();
    const { story_order,
        story_name,
        story_translation,
        story_illustration,
        story_desc,
        story_desc_translation,
        story_synopsis,
        story_synopsis_translation,
        story_language,
        story_translation_id,
        phrases } = card;

    // tour de passe-pase pour changer l'url des illustrations
    let card_img = base_server_url + "assets/img/saynetes/" + story_illustration.split('\\').pop().split('/').pop();
    card_img = base_server_url + "assets/img/saynetes/jpg/" + card_img.split('/').pop().split('.').shift() + ".jpg";

    const ctx = useContext(UserContext);

    const [direction, setDirection] = useState('ltr');

    const linkHandler = (event) => {
        ctx.decks = phrases;
    };
    useEffect(() => {
        if (story_language === "ams") {
            setDirection('rtl');
        }
    }, card);
    {/* className="relative max-w-[350px] w-full flex-1 my-4 overflow-hidden rounded-[32px] shadow-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[rgb(var(--color-bg-card))]" */ }
    return (
        <div className="max-w-[350px] w-full mx-auto flex flex-col bg-card rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
            <img src={card.story_illustration} className="h-40 w-full object-cover" />
            <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <div dir={direction}>
                        <h3 className="text-[rgb(var(--color-primary))] font-bold text-lg leading-tight">{story_translation}</h3>
                    </div>
                    {/* Séparateur discret ou marge */}
                    <div className="h-[1px] bg-gray-50 w-full my-2"></div>
                    <h4 className="text-gray-600 text-sm font-medium leading-relaxed">{story_name}</h4>
                    <div dir={direction}>
                        <p className="text-xs text-gray-500 line-clamp-3">{story_desc_translation}</p>
                    </div>
                    <p className="text-xs text-gray-500 line-clamp-3">{story_desc}</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">{phrases.length} phrases</span>
                    {
                        ctx.matrix.indexOf(story_translation_id) >= 0 ? (
                            <>
                                <button
                                    className="px-6 py-2 bg-[rgb(var(--color-primary))] text-white rounded-full text-sm font-bold shadow-sm active:scale-95 transition-transform"
                                    onClick={() => navigate(`/dialog_page/${story_language}?s=${story_translation_id}`)} >
                                    CHOISIR
                                </button>
                            </>
                        ) : (
                            <>
                                <span className="bottom-6 right-6 bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-200 text-[10px] font-black px-2 py-1 rounded-lg shadow-sm uppercase tracking-tighter border border-amber-200 dark:border-amber-800 z-10">
                                    Bientôt
                                </span>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default StoryCard