const ChatResponse = ({ response }) => {
  if (!response) {
    return null; // No response, render nothing
  }

  const { candidates, usageMetadata } = response;

  if (!candidates || candidates.length === 0) {
    return <p>No answers found for your question.</p>;
  }

  return (
    <div className="container my-4">
      <h3>Response</h3>

      {candidates.map((candidate, index) => (
        <div className="card mb-3" key={index}>
          <div className="card-body">
            <h5 className="card-title">Answer</h5>
            <p className="card-text">
              {/* Render content text */}
              {candidate?.content?.parts?.[0]?.text || "No content available"}
            </p>

            {/* Render citations if available */}
            {candidate?.citationMetadata?.citationSources?.length > 0 && (
              <>
                <h6>Citations:</h6>
                <ul>
                  {candidate.citationMetadata.citationSources.map((source, idx) => (
                    <li key={idx}>
                      <a href={source.uri} target="_blank" rel="noopener noreferrer">
                        {source.uri}
                      </a>{" "}
                      (Indexes: {source.startIndex} - {source.endIndex})
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      ))}

      {/* Display Usage Metadata */}
      <h4>Usage Metadata</h4>
      <p>Prompt Tokens: {usageMetadata?.promptTokenCount || 0}</p>
      <p>Response Tokens: {usageMetadata?.candidatesTokenCount || 0}</p>
      <p>Total Tokens: {usageMetadata?.totalTokenCount || 0}</p>
    </div>
  );
};

export default ChatResponse;
