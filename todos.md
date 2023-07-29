- Add Stop to other tools
- Voice to text
- trigger on Enter, mutliline with cmd+enter
- Add Pause
- configure rounds
- RessourcePool.clear: Does not work. Not sure we want to always clear the ressource pool between sessions. If we want, we ths needs a fix 
- clean up code
- improve 200ms calls to long-polling, 
- dark mode
- integrate Agents Protocol (e2b)
- make sure we dont filter code snippets anymore
- combine with coding agents
- load docs

- remove threading bullshit. Do we really need both checking for Stop Thread and Processing?

- Use asyncio for concurrency instead of threading: asyncio is more suitable for IO-bound tasks and integrates better with FastAPI.
@app.post("/api/objectives")
async def update_objectives(objectives: List[str]):
    # ... existing code ...

    # Define the target function for the thread
    async def target(**kwargs):
        # ... existing code ...

    # Start a new task to run the blockagi
    asyncio.create_task(target(
        agent_role=app.state.blockagi_state.agent_role,
        openai_api_key=app.state.openai_api_key,
        openai_model=app.state.openai_model,
        resource_pool=app.state.resource_pool,
        objectives=app.state.blockagi_state.objectives,
        blockagi_callback=BlockAGICallback(app.state.blockagi_state),
        llm_callback=LLMCallback(app.state.blockagi_state),
        iteration_count=app.state.iteration_count,
    ))
