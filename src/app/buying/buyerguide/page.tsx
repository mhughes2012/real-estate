import Image from "next/image";
import { Navbar } from "@/components/organisms/Navbar";

export default function BuyerGuidePage() {
    return (
        <main className="min-h-screen bg-white-clean">
            <Navbar />
            <div className="pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <header className="mb-12">
                        <h1 className="text-4xl font-bold text-navy mb-4">Buyer&#39;s guide</h1>
                        <section className="pt-32 pb-20 bg-white-clean">
                            <div className="content-page">
                                <h1>
                                    <Image
                                        src="/images/Calgary_houses-1.jpg"
                                        alt="Calgary houses"
                                        width={1200}
                                        height={800}
                                        className="h-auto w-full"
                                        priority
                                    />
                                </h1>
                                        <h1>Search The Best Neighbourhoods in Calgary</h1>
                                        <h2>Are you buying in the Greater Calgary Area?</h2>
                                        <p>House hunting can be both exciting and stressful. When purchasing a home, you
                                            are faced with a multitude of decisions - Are you actually prepared to
                                            purchase a home? Have you decided where you want to live or the type of home
                                            you prefer? Is your financing in place? Once these questions are answered
                                            and you are ready to move forward, the rewards are unquestionable.</p>
                                        <p>&nbsp;</p>
                                        <p>The resources here will help you find the answers to most of your questions.
                                            Then, when you’re ready, we can show you some of the best neighbourhoods in
                                            Calgary. We have the best possible resources and communication systems
                                            available today to help you locate the homes that match your specifications.
                                            You can start with our listings <strong><a href="/properties/real-time"><span
                                              >here</span></a></strong>.&nbsp;</p>
                                        <h2>We Are Here to Help Every Step Of The Way</h2>
                                        <p>We will use our 20 years of experience to help guide you through all the
                                            obstacles so that your experience is a positive one. Our top priority is to
                                            make sure that your home buying experience is pleasant, cost-efficient, and
                                            successful.</p>

                                        <p><a href="#realtor">What Can A REALTOR Do For Me?</a></p>
                                        <p><a href="#offer">Making An Offer</a></p>
                                        <p id="realtor"></p>
                                        <p><a href="#closing">Handing Over The Keys – Closing Day</a></p>
                                        <p>&nbsp;</p>
                                        <h2>What can a REALTOR<sup>®</sup> do for me?</h2>
                                        <p>Purchasing real estate is likely the biggest financial commitment you’ll
                                            make. The details are complicated and the advice we can offer can make most
                                            of the decisions you make along the way a little easier. You will use
                                            several professionals in the transaction – your real estate agent, mortgage
                                            broker/lender, real estate lawyer and home inspector. Our collective job is
                                            to ensure you understand the buying process, have the money to finance the
                                            deal, have checked all the legal terms of the property and the contract, and
                                            that the home is livable.</p>
                                        <p>&nbsp;</p>
                                        <p>With hundreds of transactions under our belts, we have an intimate knowledge
                                            of the Calgary housing market. Let Sheryl Thompson set your mind
                                            at ease through the journey. Here are 7 reasons why we should be part of
                                            your transaction:</p>
                                        <ol>
                                            <li><strong>Are you ready to buy?</strong> When we first meet we will listen
                                                to what brought you to this decision. We will explain the commitment
                                                home ownership entails and confirm that you have your financing in
                                                place. Home ownership has its rewards but we want to be sure you
                                                understand the risks too.
                                            </li>
                                            <li><strong>Numerous resources to help you in your home
                                                search.&nbsp;</strong>We have resources beyond the MLS. Sometimes
                                                properties are available but aren’t actively advertised in the market.
                                                Whether in Calgary or in one of the surrounding communities we can
                                                search for what is available.
                                            </li>
                                            <li><strong>We know the best neighbourhoods in Calgary and the surrounding
                                                area. </strong>We can provide local community information on schools,
                                                shopping and community activities, as well as local information about
                                                utilities, zoning, and land use planning. You want to be sure that your
                                                new home will be the property that provides the environment you want and
                                                will have resale value when it’s time to sell.
                                            </li>
                                            <li><strong>Provide current information on what is happening in the Calgary
                                                real estate market. </strong>You want to be sure you are getting the
                                                best property for your budget, in the best neighbourhood for you, and
                                                for the best price.<strong> </strong></li>
                                            <li><strong>Timing on your terms.</strong> We will help you with your house
                                                hunt at your pace. Whether you are looking to move next month or next
                                                year, we won’t push you to make a decision you might regret later.
                                            </li>
                                            <li><strong>Professional negotiation.&nbsp;</strong>We will always have your
                                                best interest in mind when it comes time to negotiate the terms of an
                                                agreement.<strong> </strong>When you find the home of your
                                                dreams<strong> </strong>we will prepare the paperwork and discuss every
                                                detail with you so you are comfortable with your offer. We will compare
                                                your offer to other similar closed transactions in the neighbourhood to
                                                confirm you are going in with the strongest offer. We will discuss the
                                                price, financing, terms, possession date and any additional details such
                                                as required repairs or furnishings included. As your agents, we will be
                                                sure to include time for a home inspection before you are required to
                                                complete the purchase.
                                            </li>
                                            <li><strong>We make sure everything flows smoothly at closing. </strong>
                                                Sheryl Thompson will make sure you ask for the appropriate paperwork
                                                from your lender and lawyer and will guide you through the closing
                                                process. If a complication arises such as unexpected repairs needed to
                                                obtain financing or a complication in the title, we can walk you through
                                                the required paperwork, so it’s not too overwhelming. Our experience
                                                will help you to objectively resolve these issues and get the
                                                transaction closed.&nbsp;</li>
                                        </ol>
                                        <p id="offer"></p>
                                        <h3>Looking For More Information About Calgary Homes?</h3>
                                        <p>Sheryl Thompson knows the Calgary Real Estate Market and are here to
                                            help you. <a href="recip.html">Search for your new home now</a> or <a
                                                href="contact.html">contact us</a> to discuss your housing needs.</p>
                                        <p>&nbsp;</p>
                                        <h2>Making an offer</h2>
                                        <p>For some, this can be a stressful period. You’ve created scenarios in your
                                            head, checked your bank account to confirm the deposit is already there and
                                            considered the layout for your new living room. But the reality of making
                                            the offer in person can cast your mind to doubt. That’s why you have a real
                                            estate agent on your side. To calm your fears and confirm that all the
                                            pieces are in place.</p>
                                        <p>When you find the property you want to buy we will make a formal, written
                                            offer to purchase. This is a <strong>legally binding
                                                contract</strong> outlining what you are prepared to pay and the timing,
                                            in exchange for the home. Remember, everything is negotiable. You should ask
                                            for what you want, but keep in mind this is a two-way exchange and you
                                            should be prepared that there may be terms you will need to give up. Sheryl
                                            Thompson will put everything in writing and review the details
                                            with you, so you are comfortable with every element of the offer before it
                                            is presented. Of course, the more conditions in your offer, the less
                                            attractive it will be to the seller. Understand that the seller may counter
                                            your offer with terms of their own, such as a higher acceptance price and/or
                                            a longer closing period.</p>
                                        <p>&nbsp;</p>
                                        <p><strong>Conditional vs. Firm Offers</strong></p>
                                        <p><strong><br/></strong></p>
                                        <p>Before making any offer take the time to confirm your financing and think
                                            hard about the investment. You need to be certain this is the purchase you
                                            are willing to commit to.</p>
                                        <p>A conditional offer to purchase means that you have placed one or more
                                            conditions on the purchase. The sale could be conditional to a home
                                            inspection, financing (unless it’s cash) or the sale of your existing home.
                                            The home is not sold until all the conditions have been met.</p>
                                        <p>In rare cases, some people make a firm offer. A firm offer means that you are
                                            prepared to purchase the home without any conditions. If the offer is
                                            accepted, the home is yours. This is usually preferable to the seller, but
                                            if you are unable to close you will lose your deposit and may get sued.</p>
                                        <p>&nbsp;</p>
                                        <p><strong>A Deposit is Required</strong></p>
                                        <p>&nbsp;</p>
                                        <p>Be prepared to provide your realtor with a deposit cheque of about $5,000 to
                                            $10,000 to accompany your offer. The full amount will depend on the price.
                                            This will be held in trust until closing and is fully refundable if the deal
                                            is not accepted. It is credited towards to full down payment for the home.
                                            Ask us for details if you have any questions regarding the full amount
                                            required.</p>
                                        <p>&nbsp;</p>
                                        <p><strong>Acceptance of the Offer</strong></p>
                                        <p>&nbsp;</p>
                                        <p>We will present your offer to purchase to the selling agent. After the seller
                                            has reviewed the offer, it may be accepted as is, rejected, or returned with
                                            a counter offer.</p>
                                        <p>&nbsp;</p>
                                        <p>The counter-offer may be any number of variables. Most common are in
                                            reference to the price and closing date. The offers can go back and forth
                                            until both parties have agreed or one ends the negotiations.</p>
                                        <p>&nbsp;</p>
                                        <p>It is always best to know your absolute upper limit before you begin
                                            negotiations and be prepared to walk away if the terms are too strict or the
                                            price gets beyond what you can afford. Remember, buy with your head, not
                                            your heart.</p>
                                        <p>&nbsp;</p>
                                        <p id="closing"></p>
                                        <p>If you would like to talk further about the offer process, please <a
                                            href="contact.html">contact us</a>. We are here to set your mind at ease and
                                            to make your home buying experience a positive one!</p>
                                        <p>&nbsp;</p>
                                        <h2>Handing over the Keys – Closing Day</h2>
                                        <p>Your offer has been accepted and closing day is here! Today is the start of a
                                            new chapter as you are handed the keys. It’s also the day that the final
                                            legal and financial details are put in place. Sheryl Thompson and
                                            your lawyer will be on call to ensure every detail is covered. The small
                                            details will have been taken care of ahead of time, so in most cases, it
                                            will be just a day of waiting by the phone.</p>
                                        <p>&nbsp;</p>
                                        <p>You should keep in mind that it is also a hectic day for the seller. Often
                                            it’s their moving day and they are trying to move out at the same time that
                                            you are anxious to move in.&nbsp;</p>
                                        <h3>Documents prepared prior to closing</h3>
                                        <ol>
                                            <li>A copy of the offer will have been forwarded to your lawyer. Your lawyer
                                                will have reviewed the conditions of the sale and you will have made
                                                him/her aware of how you, and any co-buyers, will be registered on the
                                                title of the property.
                                            </li>
                                            <li>All of the conditions in the offer to purchase will have been cleared by
                                                the closing date. For example, if one of the conditions of your offer
                                                was a home inspection, this will have been undertaken and a report
                                                provided to you prior to closing. (Usually, the home inspection is
                                                undertaken and the report provided prior to the final terms of the offer
                                                being accepted by you.)
                                            </li>
                                            <li>You will have met with your lender and all of your financing details
                                                will have been finalized and ready to fall into place on the closing
                                                date.
                                            </li>
                                            <li>Your lawyer will search the title of the property to ensure that you can
                                                purchase the home without any legal problems. (This is a very important
                                                detail, as sometimes a seller will list a property that includes another
                                                co-owner who may not agree to the sale.) You will also review the Real
                                                Property Report (RPR – land survey). Finally, your lawyer will make sure
                                                that tax payments have all been made and there are no liens on the home
                                                or on any personal property the seller has agreed to sell you as part of
                                                the deal.
                                            </li>
                                            <li>Your lawyer will prepare a statement of adjustment. This confirms the
                                                selling price, adjustments, and the balance (less the deposit you
                                                provided with the offer). Your lender will prepare a certified cheque
                                                for your lawyer to hold in trust.
                                            </li>
                                            <li>Prior to closing, you should have contacted all of the utility, cable,
                                                and phone companies to ensure an easy transition of service and billing.
                                                If the seller has pre-paid, you&#39;ll have to pay them for the portion of
                                                the service you assume.
                                            </li>
                                            <li>Also, your lawyer will need a copy of your homeowner&#39;s insurance policy
                                                for your new home and property.&nbsp;</li>
                                        </ol>
                                        <h3>Additional fees paid at closing</h3>
                                        <p>Making the final payment on your home isn’t your
                                            only expense on closing day. Meet with your lender and lawyer ahead of time
                                            to get a full grasp on what is owed as it can be as much as 1.5% to 5% of
                                            the purchase price. For example, a purchase could include the following
                                            expenses.</p>
                                        <ul>
                                            <ul>
                                                <li>Mortgage Application and Appraisal (sometimes waived by bank)</li>
                                                <li>Legal Fees &amp; Disbursements</li>
                                                <li>GST (for new homes only)</li>
                                                <li>Home and Content Insurance</li>
                                                <li>Moving and/or Storage Expenses</li>
                                            </ul>
                                        </ul>
                                        <p>Sheryl Thompson is here to help and support you. If you have any
                                            questions or want additional detail to any of the information provided
                                            here <a href="contact.html">contact us</a>. We look forward to making your
                                            home purchase an enjoyable experience!</p>
                                        <p><strong><strong><strong><br/></strong></strong></strong></p></div>
                        </section>
                    </header>
                </div>
            </div>
        </main>
    );
}