import React from "react";
import "../App.css";

function FAQ() {
  return (
    <div className="container faq" id="faq">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h1>FAQ</h1>
          <h5>Why should I subscribe to Unscripted ?</h5>
          <p>
            Journalism is expensive. And while many newsrooms have cut back on
            their on ground journalism, ushering in the age of TV news
            ‘debates’, that's simply not something we want to do. We want to be
            out in the field, reporting, researching and doing work that we
            believe in, work that is not only time-consuming, but increasingly
            more expensive as we attempt to scale up.
          </p>
          <p>
            Over the last five years, we have tried to do branded content,
            native brand messaging, a strategy that has helped offset the costs
            of ScoopWhoop other divisions and as we’ve grown, trended and
            influenced policy, brands have increasingly reached out to us for
            collaborations. However, what they ask of us, is something we aren’t
            willing to make, because the tone, rawness, lack of filter,
            irreverence and political beliefs of each of our members is what
            makes us, us.
          </p>
          <p>
            We want to continue to report fearlessly on issues that are
            important to you and for that we need you. By subscribing to
            Unscripted you empower us to continue to do work that matters
            without us having to compromise on the kind of stories we want to
            do, personal costs or to the demands of corporate India. You pay to
            keep our journalism free from restraints.
          </p>
          <h5>Where does money from Unscripted subscriptions go?</h5>
          <p>
            100% of the subscription money will go towards making our videos
            possible. Unlike print, video is expensive, a lot goes into it; it
            all starts with the research, then a crew goes on ground to shoot,
            we come back and edit it. While there is an overlapping of jobs,
            there are specialists at every stage that help bring out the best
            possible way to tell the story to you. So while the production cost
            of a video can range from INR 5,000 to INR 6,00,000+, when you
            combine all the costs, on average a single video costs about INR
            3,00,000 to make and that's where your money will go.
          </p>
          <h5>What are my membership options?</h5>
          <p>
            Currently, we have two plans, INR 200 a month and INR 1200 a year.
            As of now, neither of them are recurring and need to be renewed
            manually,{" "}
            <a
              style={{ color: "#fee000", textDecoration: "underline" }}
              href="#"
            >
              click here
            </a>{" "}
            for the subscription section to know more.
          </p>
          <h5>Is there a recurring monthly membership option?</h5>
          <p>
            We've had to disable our recurring options due to technical issues
            which we are actively resolving with our payment partners. We hope
            to resolve this in the next few weeks.
          </p>
          <h5>When will I be charged for my membership?</h5>
          <p>
            <b style={{ color: "#000000" }}>Monthly members:</b> Your initial
            payment when you join is your first month’s payment and will expire
            on the same calendar day of the subsequent month. Before your
            membership expires, you will receive a renewal intimation from our
            team and can follow the instruction to renew your membership.
          </p>
          <p>
            <b style={{ color: "#000000" }}>Yearly members:</b> You’ll be
            charged immediately when you join, then on the same calendar date
            the subsequent year. Before your membership expires, you will
            receive a renewal intimation from our team and can follow the
            instruction to renew your membership.
          </p>
          <h5>What is your cancellation policy?</h5>
          <p>Monthly members: You can cancel anytime.</p>
          <p>
            Yearly members: Pre-paid memberships are renewed yearly. If you
            cancel your membership, you’ll stay a member for the rest of the 12
            months you joined, you can choose not to renew your membership at
            the end of 12 months.
          </p>
          <h5>What is your refund policy?</h5>
          <p>
            Memberships are final sale and non-refundable. You are welcome to
            cancel anytime.
          </p>
          <h5>How do I cancel my membership?</h5>
          <p>
            You can cancel your subscription at any time. If you do choose to
            cancel, please email us at{" "}
            <a style={{ textDecoration: "underline" }} href="#">
              help@unscripted.news
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
